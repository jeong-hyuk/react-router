import React from 'react';
import styled from 'styled-components';
import PinkButton from './PinkButton';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 3em;
`;

const Explanation = styled.p`
  font-size: 1.5em;
  color: #777;
`;

const Result = styled.p`
  font-size: 3em;
  color: dodgerblue;
`;

const Additional = styled.p`
  font-size: 2em;
  color: orange;
`;

const AdditionalImg = styled.img`
  width: 500px;
`;
export default function Show() {
  const result = useSelector((state) => state.mbti.mbtiResult);
  const explanation = useSelector((state) => state.mbti.explanation[result]);
  const dispatch = useDispatch();
  return (
    <>
      <Header>당신의 개발자 mbti 결과는?</Header>
      <Explanation>결과 설명 출력</Explanation>
      <Result>결과 출력</Result>
      <Additional>이건 재미로 읽어보세요</Additional>
      <AdditionalImg src={explanation.img} alt="팩폭"></AdditionalImg>
      <PinkButton text="다시 검사하기" clickEvent={() => dispatch(reset())} />
    </>
  );
}
