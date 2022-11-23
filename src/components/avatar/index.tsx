import * as React from 'react'
import styled from 'styled-components'

const StyledAvatar = styled.aside`
  display: flex;
  width: 40px;
  height: 40px;
  font-size: 22px;
  font-weight: 600;
  border: 2px solid grey;
  border-radius: 8px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
`

export default function Avatar(): React.ReactElement {
  function avatarLetter (): string {
    const aToZ = 'abcdefghijklmnopqrstuvwxyz'

    return aToZ[Math.floor(Math.random() * aToZ.length)]
  }

  return (
    <StyledAvatar className='avatar'>
      {avatarLetter()}
    </StyledAvatar>
  )
}
