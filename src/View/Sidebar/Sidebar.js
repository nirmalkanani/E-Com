import React, { useEffect, useState } from 'react';
import "./_sidebar.scss";
import { MdGpsNotFixed, MdOutlineTrackChanges } from "react-icons/md"
import { BiChevronRight } from "react-icons/bi"
import { AiFillCaretDown } from "react-icons/ai"
import { FaRegLightbulb } from "react-icons/fa"
import { FcInTransit } from "react-icons/fc"
import { Admin_Route } from '../../Navigation/Nav';
import { Link } from 'react-router-dom';

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';



const Sidebar = ({ toggle, settoggle }) => {

    const handleToggle = () => {
        settoggle(!toggle)
    }

    function toggleOnScreenResize() {
        if (window.screen.width <= 768) {
            settoggle(!toggle)
        } else {
            settoggle(toggle)
        }
    }
    useEffect(() => {
        toggleOnScreenResize();
        window.addEventListener('resize', () => {
            toggleOnScreenResize();
        })

        return () => {
            window.removeEventListener('resize', () => { })
        }
    }, [])

    return (
        <nav className={`s_sidebar ${toggle ? `s_close` : ''}`}>
            <header className='overflow-hidden'>
                <div className="s_image-text">
                    <div className="s_logo-text">
                        <span className="s_name">SARA COLLECTION</span>
                    </div>
                </div>
                <BiChevronRight className='s_toggle' onClick={handleToggle} />

                <div className='s_project_name-wrapper'>
                    <div className="user-avtar">
                    <Avatar size={40} src="https://joeschmoe.io/api/v1/random"/>
                    </div>
                    <div className="s_text project_name">
                        <h4 className='mt-3'>Admin</h4>
                    </div>
                </div>
            </header>

            <div className="s_menu-bar">
                <div className="s_menu">
                    <ul className="s_menu-links">
                        {
                            Admin_Route.map((element, index) =>
                                <li className="s_nav-link" key={index}>
                                    <Link to={element.url}>
                                        <span className='s_icon'><i className={element.icon}></i></span>
                                        <span className="s_text nav-text">{element.name}</span>
                                        {/* <AiFillCaretDown className='s_icon-right' /> */}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Sidebar