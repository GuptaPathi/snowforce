export const RECEIVE_CONFERENCES = 'RECEIVE_CONFERENCES';
export const REQUEST_CONFERENCES = 'REQUEST_CONFERENCES';

export const RECEIVE_SPONSORS = 'RECEIVE_SPONSORS';
export const REQUEST_SPONSORS = 'REQUEST_SPONSORS';
export const REQUEST_SPONSOR = 'REQUEST_SPONSOR';

export const RECEIVE_SPEAKERS = 'RECEIVE_SPEAKERS';
export const REQUEST_SPEAKERS = 'REQUEST_SPEAKERS';
export const REQUEST_SPEAKER = 'REQUEST_SPEAKER';

export const RECEIVE_ORGANIZERS = 'RECEIVE_ORGANIZERS';
export const REQUEST_ORGANIZERS = 'REQUEST_ORGANIZERS';
export const REQUEST_ORGANIZER = 'REQUEST_ORGANIZER';

export const RECEIVE_SESSIONS = 'RECEIVE_SESSIONS';
export const REQUEST_SESSIONS = 'REQUEST_SESSIONS';
export const REQUEST_SESSION = 'REQUEST_SESSION';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const REQUEST_TRACKS = 'REQUEST_TRACKS';

export const BOOKMARKS_UPDATE = 'BOOKMARKS_UPDATE';

export const RECEIVE_SUBMISSIONS = 'RECEIVE_SUBMISSIONS';
export const RECEIVE_AUDIENCES = 'RECEIVE_AUDIENCES';
export const RECEIVE_SPONSOR_LEVELS = 'RECEIVE_SPONSOR_LEVELS';

export const SET_CONFERENCE_YEAR = 'SET_CONFERENCE_YEAR';
export const SET_TRACK_INDEX = 'SET_TRACK_INDEX';
export const SET_TRACK_NAME = 'SET_TRACK_NAME';

export const MAX_YEARS_AGO = 10;

// TODO: get this from data coming from Salesforce
export const FIRST_CONFERENCE_YEAR = 2019;

export const SESSIONS = 'sessions';
export const SPEAKERS = 'speakers';
export const SPONSORS = 'sponsors';
export const CONFERENCES = 'conferences';
export const ORGANIZERS = 'organizers';

export const FETCH_ACTION = 'FETCH_ACTION';

export const getRequestStr = (year, table) => {
  return `${year}|${table}`;
};

export const SET_TRACKS = 'SET_TRACKS';

export const VIEW_DAY = 'VIEW_DAY';
export const VIEW_TRACK = 'VIEW_TRACK';
export const VIEW_MENU_OPEN = 'VIEW_MENU_OPEN';
export const VIEW_MENU_CLOSE = 'VIEW_MENU_CLOSE';

export const ADD_REQUEST = 'ADD_REQUEST';
export const CLEAR_REQUEST = 'CLEAR_REQUEST';

export const SET_SESSION_FILTER = 'SET_SESSION_FILTER';
export const CLEAR_SESSION_FILTERS = 'CLEAR_SESSION_FILTERS';

export const SESSIONS_FILTER_AUDIENCE = 'SESSIONS_FILTER_AUDIENCE';
export const SESSIONS_FILTER_TRACK = 'SESSIONS_FILTER_TRACK';
export const SESSIONS_FILTER_LEVEL = 'SESSIONS_FILTER_LEVEL';
export const SESSIONS_FILTER_FORMAT = 'SESSIONS_FILTER_FORMAT';
export const SESSIONS_FILTER_START_TIME = 'SESSIONS_FILTER_START_TIME';
