import React from 'react';
import { shallow, mount, render } from 'enzyme';

jest.dontMock('../Foo');

import Foo from '../Foo';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
    expect(shallow(<Foo />).contains(<div className="foo" />)).toBe(true);
  });

  it("contians the class foo", function() {
    expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it("has only one class 'foo' ", function() {
    expect(mount(<Foo />).find('.foo').length).toBe(1);
  });

  it("contians the class bar", function() {
    expect(shallow(<Foo />).is('.bar')).toBe(false);
  });
});
