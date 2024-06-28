import React from 'react'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Root, { Main } from '../components/Root'

const PrivacyPolicyPage = () => {
  return (
    <Root>
      <Main>
        <Heading main>Privacy Policy</Heading>
        <Paragraph>
          This Privacy Policy documents the use, collection and storage of information pertaining to the use of Rachayitha website
          (www.rachayitha.com) and the Rachayitha application available on Android by any person (“User”/“You”/“Your”).
        </Paragraph>
        <Paragraph>
          Company facilitates a User to read, listen and/or upload literary works such as books, and poems, etc, including cover images
          (“Published Work”), read/listen to Published Work and literary works published by Company (“Company Content”), in various
          languages and upload comments, reviews on such literary works of others the same or and communicate with Company and/or other
          Users through chats (“Inputs”), on the Website/Application (“Services”). Published Work and Company Content shall together be
          referred to as “Content”.
        </Paragraph>
        <Paragraph>
          This Privacy Policy is a part of and is to be read with the “Terms of Use”. You agree to this Privacy Policy by using the
          Website/Application. If you do not agree with the same, please stop using the Website/Application.
        </Paragraph>
        <Heading>What information does Company collect?</Heading>
        <Paragraph>
          For Company to offer its Services to Users and to continuously improve the Users’ experience, Company collects certain information
          which constitute personally identifiable information (information which can be used to identify an individual) and non-personally
          identifiable information (information which cannot directly identify an individual) (together ‘User Information’) as mentioned
          below:
        </Paragraph>
        <table border="1" cellspacing="0" cellpadding="">
          <tbody>
            <tr>
              <th>Type of Information</th>
              <th>Includes</th>
            </tr>
            <tr>
              <td>Registration/Log in Data</td>
              <td>
                Name, Email Address along with profile details which are public or can be shared as per User’s privacy settings on these
                platforms.
                <br />
                Other details optionally given by the User such as gender, age, city etc
                <br />
                This also applies to Users during submission of Published Work through contests declared by the Company.
              </td>
            </tr>
            <tr>
              <td>Usage Data</td>
              <td>Inputs by Users on the Website/Application </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Data regarding pages or profiles visited, time spent on a page, navigation through the portal, location, language
                preference, search actions, participation in contests, interaction with other Users, including time and date of all such
                actions
              </td>
            </tr>
            <tr>
              <td>Payment Data</td>
              <td>Billing information, credit card details, payment, or banking information </td>
            </tr>
            <tr>
              <td>Customer support</td>
              <td>Information provided during request for User support to the Company’s executives.</td>
            </tr>
          </tbody>
        </table>
        <Heading>What does the Company use the collected User Information for?</Heading>

        <Paragraph>Company uses the User Information to:</Paragraph>
        <ul>
          <li>Enable and facilitate usage of the Website/Application including enforcing the Company’s Terms of Use</li>
          <li>To send mandatory and opted notifications to Users</li>
          <li>To communicate with the User</li>
          <li>
            For payment and billing when a user purchases virtual currency to access the Services and/or any other offerings by the Company
            which is not free Improve the functioning of the Website/Application and the Services (such as introducing new features and
            enhancing security measures to protect Users and Published Works)
          </li>
          <li>Improve the User experience by customisation, personalisation and optimisation</li>
          <li>
            Managing the Website/Application which includes troubleshooting, analysis, conducting surveys, understanding the nature of Users
            etc
          </li>
          <li>Building communities amongst the Users</li>
          <li>{`improve share feature's experience by displaying installed apps in device first`}</li>
        </ul>
        <Heading>Can any third party access the User Information?</Heading>

        <p>
          Company will never sell or rent any User Information to any third party. User Information may be accessed by third parties as
          described below:
        </p>

        <ol>
          <li>
            <strong>Business Partners</strong>
            <span>
              {`: Authorised third party business partners, who handle the User Information in accordance with their own privacy policies as mentioned in the table, engaged for:`}
            </span>
          </li>
        </ol>

        <Paragraph>{`i. Analysing the User Information, for improving the Website/Application and the Services such as below:`}</Paragraph>

        <table border="1" cellspacing="0" cellpadding="">
          <tbody>
            <tr>
              <th>Services offered</th>
              <th>Entity Name</th>
              <th>Links to privacy policy</th>
            </tr>
            <tr>
              <td>Analytics Services</td>
              <td>Google Analytics (Location USA)</td>
              <td
                style={{
                  wordBreak: 'break-word',
                }}>
                https://www.google.com/policies/privacy/partners/
                <br />
                <br />
                https://firebase.google.com/support/privacy
              </td>
            </tr>
            <tr>
              <td>To process payment</td>
              <td>Razorpay</td>
              <td>https://razorpay.com/privacy/</td>
            </tr>
          </tbody>
        </table>
        <Paragraph>
          ii. Providing a variety of services to the Company as determined by Company in good faith from time to time in relation to
          research, survey etc. to help improve the Services.
        </Paragraph>
        <Paragraph>2. Special Circumstances: Company will disclose personally identifiable information about a User</Paragraph>
        <Paragraph>i. As and when required by law or litigation</Paragraph>
        <Paragraph>
          ii. If Company determines that such a step is essential for national security, law enforcement, or other issues of public
          importance
        </Paragraph>
        <Paragraph>iii. For enforcement of its Terms of Use</Paragraph>
        <Paragraph>iv. In case of fraud, security or technical issues</Paragraph>
        <Paragraph>
          {`3. Corporate Restructuring: Company reserves the right to transfer User Information to another party as a result of merger,
          acquisition, or sale of all or a portion of Company's assets to any third party.`}{' '}
        </Paragraph>
        <Paragraph>
          4. User Published Material: Company enables Users to interact with each other in its community building endeavours between authors
          and readers. Therefore, Users’ names, comments, likes etc are public and can be viewed by other Users. Users must ensure they do
          not put up any Inputs on the Website/Application which they do not intend to make public.
        </Paragraph>

        <Heading>Where is the User Information stored and how is it secured?</Heading>

        <Paragraph>
          Company hosts the Website/Application and all User Information in the cloud infrastructure of Amazon Web Services located at
          Mumbai, India. Amazon Web Services has robust security practices to protect the stored data, details of which can be found at
          https://aws.amazon.com/privacy/?nc1=f_pr. Some information is also stored in Google Firebase infrastructure.
        </Paragraph>
        <Paragraph>
          Company follows a need-to-know policy internally to ensure only those employees can view the User Information as is necessary.
          Passwords are encrypted using PBKDF2 (Password-Based Key Derivation Function 2) and stored internally. Users must ensure that
          their passwords are safeguarded and are not shared with anyone in an unauthorised manner. Any unauthorised use may compromise the
          security of User Information.
        </Paragraph>
        <Paragraph>
          Keeping in mind the nature of the internet, Users acknowledge that despite the very robust security measures, safety of User
          Information may not be guaranteed.
        </Paragraph>

        <Heading>How is the User Information collected and what are the opt-out options?</Heading>
        <Paragraph>User Information is collected by Company primarily in the following manner:</Paragraph>
        <Paragraph>
          User-provided Information: Details provided by a User while logging-in/registering on the Website/Application and while providing
          Inputs on the Website/Application.
        </Paragraph>
        <Paragraph>
          Collected through Cookies: Cookies are small files placed locally on the browser through which the Website is being accessed.
          Cookies are placed by Company for various purposes as detailed below:
        </Paragraph>
        <table border="1" cellspacing="0" cellpadding="">
          <tbody>
            <tr>
              <th>Type</th>
              <th>Placed by</th>
              <th>Nature of tracking</th>
            </tr>
            <tr>
              <td>Mandatory</td>
              <td>Company</td>
              <td>
                Enable Website usage by Users
                <br />
                <br />
                Analytical purposes
              </td>
            </tr>
            <tr>
              <td>Analytical purposes</td>
              <td>Third Parties (Google)</td>
              <td>Analytical purposes</td>
            </tr>
          </tbody>
        </table>
        <Paragraph>
          A User may choose to opt-out of cookies on their browser. However, this may affect the performance of the Website.
        </Paragraph>
        <Paragraph>
          3. API Calls: API Calls consist of data generated when a User performs an activity on the Website/Application such as navigating
          to different pages, clicking on buttons, reading content etc. This data is collected and used by the Company and may be shared
          with authorised third parties as described in this Privacy Policy.
        </Paragraph>

        <Heading>What are the rights of Users with respect to their User Information?</Heading>
        <Paragraph>
          1. Registration: Users have the option to not register on the Website/Application if they do not want to share the mandatory
          personally identifiable information required to do so. Their ability to use the Website/Application may be restricted as
          reasonably determined by Company.
        </Paragraph>
        <Paragraph>
          2. Modification or Deletion: Users may modify or delete their profile details from their account settings on the
          Website/Application. Users are encouraged to keep their information up-to-date.
        </Paragraph>
        <Paragraph>
          3. Deletion : Users may ask for deletion of their profile and their personally identifiable information will be deleted along with
          any content they may have published on the Website/Application. However, some fragments of the User Information may still be
          available on the internet. Further, all history of the User will remain with Company. For any specific requests by a User for
          deletion of bank account details stored by the Company, the Company shall cease usage of the same by the next day and permanently
          delete the same by the end of the month in which the request is received.
        </Paragraph>
        <Paragraph>
          4. Notifications: Company would like to engage with Users through notifications for suggested reading etc via email. A User can
          set the frequency of such notifications through their account settings or completely opt-out of the same. However, notifications
          regarding the User’s account and the Website/Application itself will continue to be sent.
        </Paragraph>
        <Paragraph>
          5. Opt-out: If a User desires Company to cease usage of his User Information on the Website/Application for any of the purposes
          mentioned herein, User may write to contact@pratilipi.com. Company will endeavour to assist Users with its requests and fulfil the
          requests. However, any such action may adversely affect the User experience on the Website/Application.
        </Paragraph>

        <Heading>Changes to this Privacy Policy</Heading>
        <Paragraph>
          Company may update and revise this Privacy Policy from time to time. The revised Privacy Policy will be posted as a notification
          here: https://www.rachayitha.com/privacy-policy
        </Paragraph>
        <Paragraph>Users are advised to periodically check this page to stay informed about changes to this Privacy Policy.</Paragraph>
        <Paragraph>
          If a User disagrees to any of the changes to the Privacy Policy, User shall refrain from using or accessing the
          Website/Application/Services. User’s continued use following the posting of the revised Policy shall indicate their acceptance and
          acknowledgement of the changes and the User will be bound by it.
        </Paragraph>

        <Heading>Grievance Redressal</Heading>
        <Paragraph>
          For any grievance related to this Privacy Policy, or any other grievance in relation to the collection, usage and processing of
          your personal information, you may contact Mr. Aman Kumar, Grievance Officer at support@rachayitha.com
        </Paragraph>
        <Heading>Conflict</Heading>
        <Paragraph>
          In case of any conflict arising in the interpretation of the Privacy Policy in English and any other language as it may be made
          available on the Website/Application, the terms of the English version shall prevail.{' '}
        </Paragraph>
      </Main>
    </Root>
  )
}

export default PrivacyPolicyPage
