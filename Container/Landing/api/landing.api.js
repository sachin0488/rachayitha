import { APIInstance } from 'api/global.api'

export const fetchNewArrivalAPI = () => {
  return APIInstance({
    url: '/newarrivalbook',
    method: 'GET',
  })
}

export const fetchPotentialStarletListAPI = () => {
  return APIInstance({
    url: '/potentialstartletbook/',
    method: 'GET',
  })
}

export const fetchWeaklyFeaturedListAPI = () => {
  return APIInstance({
    url: '/weeklybook/',
    method: 'GET',
  })
}

export const fetchIncompleteListAPI = () => {
  return APIInstance({
    url: '/incompletebookwatch/',
    method: 'GET',
  })
}

export const fetchTopCollectionListAPI = ({ startDate, endDate }) => {
  return APIInstance({
    url: '/topbooklist/',
    params: {
      startDate,
      endDate,
    },
    method: 'GET',
  })
}
