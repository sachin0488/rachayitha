import styled from '@emotion/styled'

import { motion } from 'framer-motion'

const duration = 0.5
const MenuIcon = ({ isOpen }) => {
  const size = 25

  return (
    <Root size={size}>
      <Burger size={size}>
        <motion.div
          className="patty patty__1"
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: {
              x: 6.5,
              y: 5.5,
              rotate: 45,
              transition: {
                type: 'spring',
                bounce: 0.8,
                duration,
              },
            },
            closed: {
              x: 0,
              rotate: 0,
              transition: {
                type: 'spring',
                bounce: 0.8,
                duration,
              },
            },
          }}
        />
        <motion.div
          className="patty patty__2"
          variants={{
            open: {
              x: -3,
              opacity: 0,
              transition: {
                type: 'spring',
                bounce: 0.8,
                duration,
              },
            },
            closed: {
              x: 3,
              transition: {
                type: 'spring',
                bounce: 0.8,
                duration,
              },
            },
          }}
          animate={isOpen ? 'open' : 'closed'}
        />
        <motion.div
          className="patty patty__3"
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: {
              x: 7,
              y: -5.5,
              rotate: -45,
              transition: {
                type: 'spring',
                bounce: 0.8,
                duration,
              },
            },
            closed: {
              x: 0,
              rotate: 0,
              transition: {
                type: 'spring',
                bounce: 0.8,
                duration,
              },
            },
          }}
        />
      </Burger>
      <Arrow size={size}>
        <motion.div
          className="arrow arrow__1"
          variants={{
            open: {
              x: 14,
              y: 6,
              rotate: 45,
              transition: {
                type: 'spring',
                bounce: 0.2,
                duration,
              },
            },
            closed: {
              x: -14,
              y: -3,
              rotate: 45,
              transition: {
                type: 'spring',
                bounce: 0.2,
                duration,
              },
            },
          }}
          animate={isOpen ? 'open' : 'closed'}
        />
        <motion.div
          className="arrow arrow__2"
          animate={{
            x: isOpen ? 14 : -14,
            y: isOpen ? -6 : 3,
            rotate: isOpen ? -45 : -45,
            transition: {
              type: 'spring',
              bounce: 0.4,
              duration,
            },
          }}
        />
      </Arrow>
    </Root>
  )
}

const Root = styled.div`
  width: ${({ size }) => parseInt(size)}px;
  height: ${({ size }) => parseInt(size)}px;
  display: flex;
  flex-direction: column;
  scale: 0.85;
`

const Burger = styled.div`
  width: ${({ size }) => parseInt(size)}px;
  height: ${({ size }) => parseInt(size)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  .patty {
    border-radius: 2px;
    background-color: ${({ theme }) => theme.palette.secondary.main};
    height: 3.5px;
    width: ${({ size }) => parseInt(size) - 4}px;
  }
  .patty__1 {
  }
  .patty__2 {
    width: ${({ size }) => parseInt(size) - 10}px;
  }
  .patty__3 {
  }
  /* background: blue; */
`

const Arrow = styled.div`
  width: ${({ size }) => parseInt(size)}px;
  height: ${({ size }) => parseInt(size)}px;
  margin-top: -${({ size }) => parseInt(size)}px;
  /* background: red; */
  /* z-index: 1; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .arrow {
    height: 3px;
    border-radius: 2px;
    width: ${({ size }) => parseInt(size) - 10}px;
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
  .arrow__1 {
  }
  .arrow__2 {
  }
`

export default MenuIcon
