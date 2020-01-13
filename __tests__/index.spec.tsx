import * as React from "react"
import { shallow } from "enzyme"

import Home from "../pages/index"

describe("With Enzyme", () => {
  it('App shows "A simple example repo" in a <h1> tag', () => {
    const home = shallow(<Home />)
    expect(home.find("h1").text()).toEqual("Viaja en van registro!")
  })
})
