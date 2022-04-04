import React, { useState, useEffect } from 'react';

interface Props {
  weather: {
    city: string;
    id: number;
  }
}

export const Card: React.FC<Props> = ({weather}) => {

  useEffect(() => {
  })

  return(
    <>
      <h1>{weather.city} {weather.id}</h1>
    </>
  )
}