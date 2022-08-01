
import styled from 'styled-components';

export default function Quotes({ quote, speaker, onUpdate }){
    return (
        <Quote>
            <p data-testid="quote" style={{width:'100%'}}>{quote}</p>
            <p className='speaker'><i>- {speaker}</i></p>
            <Button onClick={onUpdate}>Generate</Button>
        </Quote>
    )
}

const Quote = styled.div`
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-end;
    backdrop-filter: blur(10px);
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0 0 20px -18px;
    text-align: left;
    
    .speaker{
        font-size: 1.2rem;
        margin: 20px;
    }
`;

const Button = styled.button`
    width: 100%;
    max-width: 200px;
    height: 50px;
    background: #ffa12c;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0 20px -8px #ffa12c;
    }
`;