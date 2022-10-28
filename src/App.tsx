import React, {useEffect, useState} from 'react';
import './App.css';
import {Box} from "@mui/material";
import Form from "./components/Form/Form";
import {FilmFactory, PaintedFactory, PlasticFactory} from "./classes";
import {IProduct} from "./interfaces";
import {switchFunction} from "./functions";

function App() {

    const [answer, setAnswer] = useState('0')
    const [flag, setFlag] = useState(0)

    const [order, setOrder] = useState<IProduct[]>([])
    const [orders, setOrders] = useState<IProduct[][]>([])

    const filmFactory = new FilmFactory()
    const paintedFactory = new PaintedFactory()
    const plasticFactory = new PlasticFactory()

    let counter = 0;
    useEffect(() => {
        if (answer === '7') {
            orders.push(order)
            setOrder([])
            console.log(orders);
            switchFunction(answer, counter, order, setAnswer, filmFactory, paintedFactory, plasticFactory)
        } else if (answer === '8') {
            orders.push(order)
            setFlag(1)
            console.log(orders);
            setOrder([])
        } else {
            switchFunction(answer, counter, order, setAnswer, filmFactory, paintedFactory, plasticFactory)
        }

    }, [answer])

    return (
        <Box>
            <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
                <Box display={'flex'} gap={'10px'} flexDirection={'column'}>
                    <h3>1-Додати плівочний суцільний фасад</h3>
                    <h3>2-Додати плівочну вітрину</h3>
                    <h3>3-Додати фарбований суцільний фасад</h3>
                    <h3>4-Додати фарбовану вітрину</h3>
                    <h3>5-Додати пластиковий суцільний фасад</h3>
                    <h3>6-Додати пластикову вітрину</h3>
                    <h3>7-Змінити тип матеріалу</h3>
                    <h3>8-Завершити замовлення</h3>
                </Box>

                <Form setAnswer={setAnswer}/>


            </Box>
            {flag === 1 &&
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}
                     sx={{border: '2px solid orange', margin: '0 500px'}}>
                    <h1>Ваше замовлення:</h1>
                    <h2>Вартість: {orders.reduce(
                        (previousValue, currentValue) => previousValue + currentValue.reduce((acc, curr) => {
                            return acc + curr.price;
                        }, 0),
                        0
                    )} грн</h2>
                    <h3>Склад:</h3>
                    {orders.map(oneOrder => oneOrder.map(facade => (
                        <ul >
                            <li >ім'я - {facade.productDescription}, розмір - {facade.size}, ціна: {facade.price} грн</li>
                        </ul>
                    )))}
                </Box>
            }
        </Box>
    );
}

export default App;
