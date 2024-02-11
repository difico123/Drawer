import { toNumber } from 'lodash';
import React, { useState } from 'react';
type IProps = {
    title?: string
    value?: number,
    onChangeValue?: (value: number) => void
}

export function RangeSlider(props: IProps) {
    const { title, value: _value, onChangeValue } = props
    const [value, setValue] = useState<number>(_value || 0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = toNumber(event.target.value)
        setValue(val);
        onChangeValue?.(val)
    };

    return (
        <div className="slider-container">
            <div className='uppercase'> {title}</div>
            <input
                type="range"
                min={0}
                max={100}
                value={value}
                step={1}
                onChange={handleChange}
                className="volume"
            />
        </div>
    );
}

