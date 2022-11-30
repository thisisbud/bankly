import * as React from 'react'
import styled from 'styled-components'

const StyledAvatar = styled.aside`
  display: flex;
  width: 48px;
  height: 48px;
  font-size: 22px;
  font-weight: 600;
  border: 2px solid #88869F;
  border-radius: 8px;
  background-color: #0E0E11;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
`

export default function Merchant(): React.ReactElement {
  const avatarLetter = function() {
    const aToZ = 'abcdefghijklmnopqrstuvwxyz'

    return aToZ[Math.floor(Math.random() * aToZ.length)]
  }()

  return (
    <StyledAvatar className='avatar'>
      {avatarLetter}
    </StyledAvatar>
  )
}
