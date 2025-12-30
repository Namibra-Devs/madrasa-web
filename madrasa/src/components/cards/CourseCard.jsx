import React from 'react';
import { Clock, Users, Star, Play, Eye } from 'lucide-react';
import { portal } from '../../utils/api';

const CourseCard = ({ course }) => {
  const {
    title,
    shortdescription,
    thumbnail,
    price,
    ratings,
    duration,
    instructor,
    category,
    lessons,
    views,
    totalRegistrations
  } = course;

  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Thumbnail Section */}
      <div className="relative group">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={48} />
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {category.name}
        </div>
        
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-md">
          ₵{price}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-emerald-600 transition-colors cursor-pointer">
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {shortdescription}
        </p>

        {/* Instructor */}
        <div className="flex items-center mb-4">
          <img 
            src={instructor.profilePicture} 
            alt={instructor.fullName}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm text-gray-700 font-medium">
            {instructor.fullName}
          </span>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{duration}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Play size={16} />
            <span>{lessons.length} lessons</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Eye size={16} />
            <span>{views}</span>
          </div>
        </div>

        {/* Rating and Enrollment */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-900">
              {ratings > 0 ? ratings.toFixed(1) : 'No ratings'}
            </span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Users size={16} />
            <span>{totalRegistrations} enrolled</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200" 
        onClick = {() => window.open(`${portal}/course/course-detail/${course._id}/details`, '_blank', 'noopener,noreferrer')}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};
export default CourseCard;