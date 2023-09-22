import React from 'react'
import logo from '/logo.svg'

import { useState } from 'react'
let result = [];
let category = "";
let materials = [];
let credit = "";

function Prediction() {
    const [item, setItem] = useState({ device: "", company: "", modelno: "" });

    const predict = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://3.209.184.190/user/ewastes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ device: item.device, company: item.company, modelno: item.modelno })
        })
        const data = await response.json()
        result.unshift(data.prediction)
        category = data.prediction.category
        materials = [...data.prediction.materials]
        credit = data.prediction.credit
        // console.log(category, materials, credit)
        document.getElementById("info").style.display = "block";
        setItem({ device: "", company: "", modelno: "" })
    };


    const onChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }

    const closeInfo = () => {
        let ele = document.getElementById("info");
        ele.style.display = "none";
    }

    return (
        <div id="prediction">
            <div id="info">
                <div id="infoBox">
                    <i className="fa-solid fa-xmark" id="infoClose" onClick={closeInfo}></i>
                    <h1>Prediction Result</h1>
                    <div id="resultInfo">
                        <h4>{category}</h4>
                        <div id="elementsInfo">
                            {materials.map((e, i) => {
                                return <div key={i} id="materialsInfo">
                                    <p>{e.material}: <b>{e.value}</b> gm</p>
                                </div>
                            })}
                        </div>
                        <p>Credit Points: <b>{credit}</b></p>
                    </div>
                    <img src="/login-box-blobs.png" alt="" />
                <div id="harm">
                    <h3>Harmful Elements</h3>
                    <p>Toxic chemicals such as lead, mercury, and cadmium are released into the environment when such electronic devices or waste is not properly disposed of, reused, or recycled. The release of these toxic chemicals results in soil, water, and air pollution</p>
                </div>
                </div>
            </div>
            <div id="form">
                <div id="inputLogo">
                    <img src={logo} alt="" />
                </div>
                <div id="inputBox">
                    <h1>Give Your Device Details</h1>
                    <form>
                        <div className="input">
                            <label htmlFor="device">Device Name:</label>
                            <input type="text" name="device" id="device" placeholder="Enter Device Name" value={item.device} onChange={onChange} />
                        </div>
                        <div className="input">
                            <label htmlFor="company">Company Name:</label>
                            <input type="text" name="company" id="company" placeholder="Enter Company Name" value={item.company} onChange={onChange} />
                        </div>
                        <div className="input">
                            <label htmlFor="modelno">Model Name:</label>
                            <input type="text" name="modelno" id="modelno" placeholder="Enter Model Name" value={item.modelno} onChange={onChange} />
                        </div>
                        <input type="submit" id="btn" onClick={predict} />
                    </form>
                </div>
            </div>
            <div id="resultHistory">
                <h2>Showing {result.length} Prediction History(s)</h2>
                <div id="resultBox">
                    {
                        result.map((ele, i) => {
                            return <div key={i} id="resultCards">
                                <h4>{ele.category}</h4>
                                <div id="elements">
                                    {ele.materials.map((e, i) => {
                                        return <div key={i} id="materials">
                                            <p>{e.material}: {e.value} gm</p>
                                        </div>
                                    })}
                                </div>
                                <p>Credit Points: {ele.credit}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Prediction
