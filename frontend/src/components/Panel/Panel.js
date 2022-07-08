import React, { useRef, useState } from "react";
import { PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#1b1b', '#D82148'];

function Panel() {
    const key = JSON.parse(window.localStorage.getItem('user-session')).password;
    const firstRender = useRef(true);
    const [myData, setMyData] = useState([
      { name: "Strong Passwords", value: 2 },
      { name: "Weak Passwords", value: 1 },
    ]);
  
    const [myDataChart, setMyDataChart] = useState([
      {
        name: '1',
        strength: 1,
      },
      {
        name: '2',
        strength: 1,
      },
      {
        name: '3',
        strength: 1,
      },
      {
        name: '4',
        strength: 1,
      },
      {
        name: '5',
        strength: 1,
      },
    ])
    return(
        <>
        <h1>Panel</h1>
        <div className='conteiner-card-chart'>
            <div className='card-chart'>
                <h2> Strong Passwords & Password Strength</h2>
                <div className='conteiner-chart'>
                    <div className='dimension-chart'>
                        <PieChart width={340} height={300}>
                            <Pie
                            dataKey="value"
                            isAnimationActive={true}
                            data={myData}
                            outerRadius={100}
                            label
                            >
                            {myData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                        <ResponsiveContainer width={340} height={300}>
                            <BarChart
                            width={500}
                            height={300}
                            data={myDataChart}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="strength" fill="#1b1b" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Panel;