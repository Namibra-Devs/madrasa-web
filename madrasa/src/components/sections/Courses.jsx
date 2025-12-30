
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@utils/animations";
import Button from "@components/ui/Button";
import {
  BookOpen,
  Landmark,
  Languages,
  Brain,
} from "lucide-react";
import apiurl from "../../utils/api";
import CourseCard from "../cards/CourseCard";

/* Icon map for API-driven icons */
const ICONS = {
  BookOpen,
  Landmark,
  Languages,
  Brain,
};

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /* Fetch courses */
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${apiurl}/courses/get-All-Courses`);
        setCourses(res.data.courses);
        console.log("Courses fetched:", res.data.courses);
      } catch (err) {
        console.error("Courses fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };


    fetchCourses();
  }, []);

  return (
    <section id="courses" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm mb-4">
            Our Courses
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Islamic Education
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Carefully designed tracks for meaningful progress.
          </p>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-gray-500 dark:text-gray-400">
            Loading courses…
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center text-red-500">
            Failed to load courses. Please try again later.
          </div>
        )}

        {/* Courses Grid */}
        {!loading && !error && (
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {courses.slice(0,6).map((c) => {
              return (
             <CourseCard course={c} />
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Courses;
