import { useState } from 'react'
import './App.css'
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EventTrackerHome from './components/EventTrackerHome';
import EventTracker from './components/EventTracker';
import EventList from './components/EventList';
import NewEvent from './components/NewEvent';
import ViewEvent from './components/ViewEvent';
import UpdateEvent from './components/Edit';

function App() {

  const [holiday, setHoliday] = useState('');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EventTrackerHome setHoliday={setHoliday} />} />
          <Route path="/eventtracker/:holiday" element={<EventTracker holiday={holiday} setHoliday={setHoliday} />} />
          <Route path="/eventtracker/:holiday/eventlist" element={<EventList holiday={holiday} setHoliday={setHoliday} />} />
          <Route path="/eventtracker/:holiday/newevent" element={<NewEvent holiday={holiday} setHoliday={setHoliday} />} />
          <Route path="/eventtracker/:holiday/eventdetails/:id" element={<ViewEvent holiday={holiday} setHoliday={setHoliday} />} />
          <Route path="/eventtracker/:holiday/updateevent/:id" element={<UpdateEvent holiday={holiday} setHoliday={setHoliday} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
