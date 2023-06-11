import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { BOX_NUMBER } from '../../store/constants'

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 20px 80px 148px;

  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #A0A0A0;
`

export function DateTimeInfo() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [tick, setTick] = useState<boolean>(true)

  const dateBase = dayjs(currentDate)
  
  const date = dateBase.format('DD.MM.YYYY')
  const hours = dateBase.format('HH')
  const minutes = dateBase.format('MM')
  const time = `${hours}${tick ? ':' : ' '}${minutes}`

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
      setTick((prev) => !prev)
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      {`${date} ${time} Касса #${BOX_NUMBER}`}
    </Wrapper>
  )
}
