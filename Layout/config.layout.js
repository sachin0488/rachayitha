export const ButtonType = {
  Normal: 'Normal',
  Expand: 'Expand',
}

export const NabLinkList = [
  {
    type: ButtonType.Normal,
    label: 'Home',
    link: '/',
  },
  {
    type: ButtonType.Expand,
    label: 'Admission',
    menuList: [
      {
        label: 'Fee',
        link: '/admission/fee',
      },
      {
        label: 'Exam Schedule',
        link: '/admission/exam_schedule',
      },
      {
        label: 'Facilities',
        link: '/admission/facilities',
      },
      {
        label: 'Campus Tour',
        link: '/admission/campus_tour',
      },
      {
        label: 'Admission & Transport',
        link: '/admission/admission_and_transport',
      },
      {
        label: 'Staff Orientation',
        link: '/admission/staff_orientation',
      },
    ],
  },
  {
    type: ButtonType.Expand,
    label: 'Academics',
    menuList: [
      {
        label: 'Academic Programme',
        link: '/academics/academic_programme',
      },
      {
        label: 'Sport & Games',
        link: '/academics/sport_games',
      },
      {
        label: 'Health Care',
        link: '/academics/health_care',
      },
      {
        label: 'Target',
        link: '/academics/target',
      },
      {
        label: 'Facility & Nourishment',
        link: '/academics/facility_nourishment',
      },
      {
        label: 'Our Efforts',
        link: '/academics/our_efforts',
      },
      {
        label: 'Rules & Regulations',
        link: '/academics/rules_regulations',
      },
      {
        label: 'Special Education',
        link: '/academics/special_education',
      },
      {
        label: 'Creativity & Performance',
        link: '/academics/creativity_performance',
      },
    ],
  },
  {
    type: ButtonType.Normal,
    label: 'Gallery',
    link: '/gallery',
  },
  {
    type: ButtonType.Normal,
    label: 'About Us',
    link: '/about_us',
    // menuList: [
    //   {
    //     label: 'Our Chairman',
    //     link: '/academic_programme',
    //   },
    //   {
    //     label: 'Our Principal',
    //     link: '/sport_games',
    //   },
    //   {
    //     label: 'Chief Patron',
    //     link: '/health_care',
    //   },
    //   {
    //     label: 'Target',
    //     link: '/target',
    //   },
    //   {
    //     label: 'Facility & Nourishment',
    //     link: '/facility_nourishment',
    //   },
    // ],
  },
  {
    type: ButtonType.Normal,
    label: 'Contact Us',
    link: '/contact_us',
  },
]
