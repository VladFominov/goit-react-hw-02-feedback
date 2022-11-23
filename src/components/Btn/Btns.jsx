import { BtnContainer, Btn } from '../Btn/Btn.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // options = ['good', 'neutral', 'bad']
  
  return (
    <BtnContainer>
      {options.map(name => {
        return (
          <Btn key={name} name={name} type="button" onClick={onLeaveFeedback}>
            {name}
          </Btn>
        );
      })}
    </BtnContainer>
  );
};

export default FeedbackOptions;