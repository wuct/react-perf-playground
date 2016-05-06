import './setup'
import inspect from 'object-inspect'
import React from 'react'
import Perf from 'react-addons-perf'
import { mount } from 'enzyme'

Perf.start()

const wrapper = mount(<div />)

wrapper.setProps({ a: 1 })

Perf.stop()
Perf.printInclusive()
Perf.printExclusive()
Perf.printWasted()
