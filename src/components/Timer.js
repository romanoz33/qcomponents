import React, { useState, useEffect, useMemo } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Text } from '@quarkly/widgets';
const overrides = {
	'Timer Item': {
		'kind': 'Box',
		'props': {
			'flex': '1 0  auto',
			'text-align': 'center'
		}
	},
	'Timer Value': {
		'props': {
			'font-size': '40px',
			'font-weight': '900'
		}
	},
	'Timer Title': {
		'kind': 'Text',
		'props': {
			'font-weight': '300'
		}
	},
	'Timer Text Done': {
		'kind': 'Text',
		'props': {
			'flex': '1 0 100%',
			'text-align': 'center',
			'children': 'Указанное время достигнуто'
		}
	}
}; // Регулярка на проверку формата даты. Принимает следующие форматы: 23-03-2023, 23.03.2023, 23/03/2023
// Также, проверяет кол-во месяцев и дней, с учетом высокосных лет. 

const regDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/; // Регулярка на проверку формата времени. Принимает следующий формат 22:33.

const regTime = /^(([0,1][0-9])|(2[0-3])):[0-5][0-9]$/;

const addZero = num => {
	if (num <= 9) num = `0${num}`;
	return num;
};

const setDifferenceDate = (targetDate, date) => {
	// Получаем разницу между датами в секундах
	const diffDatesInSec = Math.ceil((targetDate - date) / 1000); // Получаем целое число дней

	const diffDays = Math.floor(diffDatesInSec / (60 * 60 * 24)); // Получаем остаток в секундах. Все что меньше 86400сек

	const remOfDays = diffDatesInSec % (60 * 60 * 24); // Получаем целое число часов

	const diffHouse = Math.floor(remOfDays / (60 * 60)); // Получаем остаток в секундах. Все что меньше 3600сек

	const remOfHouse = remOfDays % (60 * 60); // Получаем целое число минут

	const diffMinutes = Math.floor(remOfHouse / 60); // Получаем остаток в секундах. Все что меньше 360сек

	const remOfMinutes = remOfHouse % 60;
	const diffSeconds = remOfMinutes;
	return {
		day: addZero(diffDays),
		hour: addZero(diffHouse),
		min: addZero(diffMinutes),
		sec: addZero(diffSeconds)
	};
};

const date = new Date();
const dateNow = `${date.getDate()}
-${addZero(date.getMonth() + 1)}
-${addZero(date.getFullYear())}`;
const timeNow = `${addZero(date.getHours())}
:${addZero(date.getMinutes())}`;

const Timer = ({
	toDate,
	toTime,
	showDays,
	showHours,
	showMinutes,
	showSeconds,
	showTextDone,
	...props
}) => {
	const [dateState, setDateState] = useState({
		day: '00',
		hour: '00',
		min: '00',
		sec: '00'
	});
	const [isDoneDate, setDoneDate] = useState(false);
	const isAlways = useMemo(() => showTextDone === 'always', [showTextDone]);
	const isComplete = useMemo(() => showTextDone === 'complete' && isDoneDate, [showTextDone, isDoneDate]);
	useEffect(() => {
		const date = new Date();
		let year, month, day, hour, min;
		const regDateStatus = regDate.test(toDate.trim());
		const regTimeStatus = regTime.test(toTime.trim());

		if (regDateStatus) {
			const targetArr = toDate.split(/[.,\/ -]/);
			year = targetArr[2];
			month = targetArr[1] - 1;
			day = targetArr[0];
		} else {
			year = date.getFullYear();
			month = date.getMonth();
			day = date.getDate() + 1;
		}

		;

		if (regTimeStatus) {
			const targetArr = toTime.split(/[:]/);
			hour = targetArr[0];
			min = targetArr[1];
		} else {
			hour = date.getHours();
			min = date.getMinutes();
		}

		;
		const targetDate = new Date(year, month, day, hour, min);
		setDoneDate(false);
		const timerID = setInterval(() => {
			const date = Date.now();

			if (targetDate > date) {
				setDateState(setDifferenceDate(targetDate, date));
			} else {
				setDateState({
					day: '00',
					hour: '00',
					min: '00',
					sec: '00'
				});
				clearInterval(timerID);
				setDoneDate(true);
			}
		}, 1000);
		return () => {
			clearInterval(timerID);
		};
	}, [toDate, toTime]);
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	return <Box {...rest} width='100%' display='flex' flex-wrap='wrap'>
		{!isAlways && !isComplete && showDays && <Box {...override('Timer Item')}>
			<Text {...override('Timer Value', 'Timer Value Days')}>
				{dateState.day}
			</Text>
			<Text {...override('Timer Title', 'Timer Title Days')}>
				{override('Timer Title Days').children || 'Days'}
			</Text>
			 
		</Box>}
		{!isAlways && !isComplete && showHours && <Box {...override('Timer Item')}>
			<Text {...override('Timer Value', 'Timer Value Hours')}>
				{dateState.hour}
			</Text>
			<Text {...override('Timer Title', 'Timer Title Hours')}>
				{override('Timer Title Hours').children || 'Hours'}
			</Text>
			 
		</Box>}
		{!isAlways && !isComplete && showMinutes && <Box {...override('Timer Item')}>
			<Text {...override('Timer Value', 'Timer Value Minutes')}>
				{dateState.min}
			</Text>
			<Text {...override('Timer Title', 'Timer Title Minutes')}>
				{override('Timer Title Minutes').children || 'Minutes'}
			</Text>
			 
		</Box>}
		{!isAlways && !isComplete && showSeconds && <Box {...override('Timer Item')}>
			<Text {...override('Timer Value', 'Timer Value Seconds')}>
				{dateState.sec}
			</Text>
			<Text {...override('Timer Title', 'Timer Title Seconds')}>
				{override('Timer Title Seconds').children || 'Seconds'}
			</Text>
			 
		</Box>}
		{(isAlways || isComplete) && <Text {...override('Timer Text Done')} />}
		{!showDays && !showHours && !showMinutes && !showSeconds && <Text flex='1 0 100%' text-align='center'>
			Чувак, ты все выключил
		</Text>}
	</Box>;
};

const propInfo = {
	toDate: {
		title: 'To Date',
		description: {
			en: 'Отсчет до определенной даты'
		},
		control: 'input',
		category: 'Main',
		weight: .5
	},
	toTime: {
		title: 'To Time',
		description: {
			en: 'Отсчет до определенного времени'
		},
		control: 'input',
		category: 'Main',
		weight: .5
	},
	showDays: {
		title: 'Days',
		description: {
			en: 'Показать поле дни'
		},
		control: 'checkbox',
		category: 'Main',
		weight: .5
	},
	showHours: {
		title: 'Hours',
		description: {
			en: 'Показать поле часы'
		},
		control: 'checkbox',
		category: 'Main',
		weight: .5
	},
	showMinutes: {
		title: 'Minutes',
		description: {
			en: 'Показать поле часы'
		},
		control: 'checkbox',
		category: 'Main',
		weight: .5
	},
	showSeconds: {
		title: 'Seconds',
		description: {
			en: 'Показать поле часы'
		},
		control: 'checkbox',
		category: 'Main',
		weight: .5
	},
	showTextDone: {
		title: 'Show Text Done',
		description: {
			en: 'Показать текст после окончания таймера'
		},
		control: 'radio-group',
		variants: ['always', 'complete', 'never'],
		category: 'Main',
		weight: 1
	}
};
const defaultProps = {
	toDate: dateNow,
	toTime: timeNow,
	showDays: true,
	showHours: true,
	showMinutes: true,
	showSeconds: true,
	showTextDone: 'complete'
};
Object.assign(Timer, {
	overrides,
	propInfo,
	defaultProps
});
export default Timer;