// BreadCrumb.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { coursesList } from '../../components/courses/CourseList';

function BreadCrumb() {
    const location = useLocation();
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    useEffect(() => {
        const pathParts = location.pathname.split('/').filter(crumb => crumb !== '');
        const breadcrumbsArray = [];

        let currentPath = '';
        for (let i = 0; i < pathParts.length; i++) {
            currentPath += '/' + pathParts[i];
            const crumb = pathParts[i];
            const title = crumb === 'courses' ? 'Courses' : getTitleFromId(crumb);
            breadcrumbsArray.push({ title, path: currentPath });
        }

        setBreadcrumbs(breadcrumbsArray);
    }, [location.pathname]);

    const getTitleFromId = (courseId) => {
        const course = coursesList.find(course => course.id === parseInt(courseId));
        return course ? course.title : '';
    };

    return (
        <div className="text-sm breadcrumbs py-4 bg-[#F5F5F5] text-[#555555]">
            <ul className='section-container'>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index}>
                        <Link to={breadcrumb.path}>
                            {breadcrumb.title}
                            </Link>
                        {/* Render the path */}
                        {/* <span>{breadcrumb.path}</span> */}
                    </li>
                ))}
            </ul>
            {/* ------------------- */}
        </div>
    );
}

export default BreadCrumb;
