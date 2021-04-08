import { FunctionComponent, useState } from 'react';
import { QuestionItem } from '../../../@types/question';
import { CheckOutlined } from '@ant-design/icons';
import './QuestionContent.less';
export interface QuestionContentProps {
  index: number;
  answer?: number;
  currentQuestion: QuestionItem;
}

const QuestionContent: FunctionComponent<QuestionContentProps> = (props) => {
  const { currentQuestion }: { currentQuestion: any } = props;

  // key 转换列表
  const translate: any = {
    A: 'a_answer',
    B: 'b_answer',
    C: 'c_answer',
    D: 'd_answer',
    E: 'e_answer',
  };

  /**
   * @method 手动选择题目
   * @param {event} e - 事件委托
   */

  const changeQuestion = (e: any) => {
    console.log(e);
  };

  const answerList = Object.keys(translate).map((key, index) => {
    return (
      <div
        className={
          index !== props?.answer
            ? `answer-item`
            : 'answer-item answer-item-active'
        }
        key={index}
        data-key={index}
      >
        <span>
          {key}.{currentQuestion[translate[key]]}
        </span>
        {index === props?.answer ? <CheckOutlined /> : null}
      </div>
    );
  });

  return (
    <div className="question-content-container">
      <div className="question-title">
        {`${props.index + 1} ${currentQuestion.title}`}
      </div>
      <div className="answer-box" onClick={changeQuestion}>
        {answerList}
      </div>
    </div>
  );
};

export default QuestionContent;
