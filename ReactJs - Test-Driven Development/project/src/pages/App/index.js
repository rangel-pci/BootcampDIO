
import image2 from '../../images/image2.png';
import styled from 'styled-components';
import Quotes from '../../components/Quotes';
import { getQuote } from '../../services/quoteServices';
import { useEffect, useState, useRef } from 'react';

const App = () => {
    const isMounted = useRef(true);
    const [quote, setQuote] = useState('...');
    const [speaker, setSpeaker] = useState('...');

    useEffect(() => {
        onUpdate();

        return () => {
            isMounted.current = false;
        };
    }, [])

    const onUpdate = async () => {
        const res = await getQuote();

        if(isMounted.current){
            setQuote(res.quote);
            setSpeaker(res.speaker);
        }
    };

    return(
        <Content>
            <Quotes quote={quote} speaker={speaker} onUpdate={onUpdate} />
            <NarutoImg src={image2} alt='naruto' />
        </Content>
    )
}

const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NarutoImg = styled.img`
    width: '100%';
    max-width: 50vw;
    align-self: flex-end;
`;

export default App;