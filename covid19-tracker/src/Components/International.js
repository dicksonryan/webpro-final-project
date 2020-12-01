import React, {useEffect, useState} from 'react'
import axios from 'axios'

const International = () =>{
    const [confirmed, setConfirmed] = useState([])
    const [recovered, setRecovered] = useState([])
    const [death, setDeaths] = useState([])
    useEffect(() =>{
        axios
        .get("https://covid19.mathdro.id/api")
        .then((response) => {
            setConfirmed (response.data.confirmed.value)
            setRecovered (response.data.recovered.value)
            setDeaths (response.data.deaths.value)
        })
    }, [])
}

export default International