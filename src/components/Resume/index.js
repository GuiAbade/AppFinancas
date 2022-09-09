import React from 'react';
import ResumeItem from '../ResumeItem';
import * as C from './styles';
  import{
    FaAngleUp,
    FaAngleDown,
    FaDollarSign,
  } from 'react-icons/fa';

const Resume = () => {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={FaAngleUp} value="1000" />
      <ResumeItem title="Saídas" Icon={FaAngleDown} value="1000" />
      <ResumeItem title="Total" Icon={FaDollarSign} value="1000" />
    </C.Container>
  );
};

export default Resume;