import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { IndividualLink, LinkContainer, IndividualLinkText, ImgComp } from '../CreateStyle'

const CreatePageLinkContainer = () => {
  const icon = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1668153331/dashboard_utnewk.svg'
  const router = useRouter()
  const { chapter } = router.query
  const section = router.pathname.split('/')[3]
  // console.log(router.asPath,"aspath",chapter)
  return (
    <>
      <LinkContainer>
        <Link href={`/create/dashboard/stories`}>
          <IndividualLink
            className={
              router.pathname == `/create/dashboard/${section}` ||
              router.pathname == `/create/dashboard/${section}/create_new` ||
              router.pathname == `/create/dashboard/${section}/new_chapter`
                ? 'active'
                : ''
            }>
            <img src={icon} />
            <IndividualLinkText>Dashboard</IndividualLinkText>
          </IndividualLink>
        </Link>
        <Link href={`/create/workspace/stories`}>
          <IndividualLink
            className={
              router.pathname == `/create/workspace/${section}` || router.asPath == `/create/workspace/edit/${chapter}`
                ? 'active'
                : ''
            }>
            <img src={icon} />
            <IndividualLinkText>Workspace</IndividualLinkText>
          </IndividualLink>
        </Link>
        <Link href={`/create/income`}>
          <IndividualLink className={router.pathname == `/create/income/${section}` ? 'active' : ''}>
            <img src={icon} />
            <IndividualLinkText>Income</IndividualLinkText>
          </IndividualLink>
        </Link>
      </LinkContainer>
    </>
  )
}

export default CreatePageLinkContainer
