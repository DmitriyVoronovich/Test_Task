import React from 'react';
import { dataWithInputElement } from '../../../../data';
import { S } from './Radiogroup_Styles';

export const Radiogroup = ({ handleChange }) => (
  <>
    {dataWithInputElement.map((item) => (
      <div>
        <S.Input type="radio" id={item.id} name="win" value={item.value} onChange={handleChange} />
        <S.Label htmlFor={item.htmlFor}>{item.value}</S.Label>
      </div>
    ))}
  </>
);
