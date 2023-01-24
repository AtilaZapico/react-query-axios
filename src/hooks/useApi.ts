import React from 'react'
import { useEffect, useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'


const api = axios.create({
    baseURL:'https://api.github.com'
})

export function useApi <T=unknown>(url:string, options?:AxiosRequestConfig){

    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsfetching] = useState(true)

    useEffect(() => {
        api.get(url)
          .then(response =>
            setData(response.data))
            .finally(()=>{
                setIsfetching(false)
            })
      }, [])

      return { data, isFetching }

}