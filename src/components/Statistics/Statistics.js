import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const quizTopics=useLoaderData();
    const topics=quizTopics["data"]; 
    const data=[];
    topics.map(topic=>data.push(topic.total));
    // for (let topic in topics){
        // data.push(topic.total);
    // }
    // console.log(data);
    return (
        <div className='w-75 mx-auto'> 
            <h2 className='mb-5'>Statistics</h2>
            <LineChart className='mx-auto mt-4' width={500} height={300} data={topics}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    );
};

export default Statistics;