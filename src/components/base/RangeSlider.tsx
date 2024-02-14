import { toNumber } from 'lodash';
import React, { useState } from 'react';
type IProps = {
    title?: string
    value?: number,
    min?: number,
    max?: number
    step?: number
    onChangeValue?: (value: number) => void
}

export function RangeSlider(props: IProps) {
    const { title, value: _value, onChangeValue, min, max, step } = props
    const [value, setValue] = useState<number>(_value || 0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = toNumber(event.target.value)
        setValue(val);
        onChangeValue?.(val)
    };

    return (
        <div className="slider-container">
            <div className='flex-x-center'> {title}</div>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                step={step}
                onChange={handleChange}
                className="volume bg-transparent"
            />
        </div>
    );
}

