import 'console.table'
import React from 'react'
import Perf from 'react-addons-perf'
import { shallow } from 'enzyme'

Perf.start()

shallow(<div />)

Perf.stop()
Perf.printWasted()
Perf.getLastMeasurements()