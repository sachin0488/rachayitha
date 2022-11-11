import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  IndividualLink,
  LinkContainer,
  IndividualLinkText,
  ImgComp,
} from "./CreateStyle";

const CreatePageLinkContainer = () => {
  const icon =
    "https://res.cloudinary.com/dk6twrko6/image/upload/v1668153331/dashboard_utnewk.svg";
  const router = useRouter();
  const section = router.pathname.split("/")[3];
  return (
    <>
      <LinkContainer>
        <Link href={`/create/dashboard/stories`}>
          <IndividualLink
            className={
              router.pathname == `/create/dashboard/${section}` ? "active" : ""
            }
          >
            <img src={icon} />
            <IndividualLinkText>Dashboard</IndividualLinkText>
          </IndividualLink>
        </Link>
        <Link href={`/create/workspace/stories`}>
          <IndividualLink
            className={
              router.pathname == `/create/workspace/${section}` ? "active" : ""
            }
          >
            <img src={icon} />
            <IndividualLinkText>Workspace</IndividualLinkText>
          </IndividualLink>
        </Link>
        <Link href={`/create/income`}>
          <IndividualLink
            className={
              router.pathname == `/create/income/${section}` ? "active" : ""
            }
          >
            <img src={icon} />
            <IndividualLinkText>Income</IndividualLinkText>
          </IndividualLink>
        </Link>
      </LinkContainer>
    </>
  );
};

export default CreatePageLinkContainer;
