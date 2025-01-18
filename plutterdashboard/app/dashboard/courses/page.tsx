import { CourseList } from "@/components/dashboard/course/course-list";

export default function CoursesPage() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Courses</h2>
      </div>
      <CourseList />
    </div>
  )
}

