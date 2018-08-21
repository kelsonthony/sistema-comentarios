import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Comments from './Comments'



describe('<Comments />', () => {
    
    it('renders without crashing', () => {
        const comments = {
            1: {
                comment: 'test 1'
            },
            2: {
                comment: 'test 2'
            },
            3: {
                comment: 'test 3'
            }
            
        }
        const wrapper = shallow(<Comments comments={comments} />)
        expect(wrapper.length).toBe(1)
        //console.log(wrapper.find('Comment').length)
        expect(wrapper.find('Comment').length).toBe(3)
        //expect(wrapper.is('.card')).toBe(true)
        //console.log(wrapper.text())
        //expect(wrapper.text()).toBe(comment.comment)
    })

})    