import React from 'react';
import ResumeItem from '../ResumeItem';
import * as C from './styles';
  import{
    FaAngleUp,
    FaAngleDown,
    FaDollarSign,
  } from 'react-icons/fa';

const Resume = ({income, expense, total}) => {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={FaAngleUp} value={income} />
      <ResumeItem title="Saídas" Icon={FaAngleDown} value={expense} />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Resume;