const multiplyValue = (value: number, multiplier?: number) => {
  if (multiplier === undefined) {
    return value * 2;
  }
  return value * multiplier;
};

const processInput = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
      if (value === true) {
        return "Active";
      } else {
        return "Inactive";
      }
  }
};

const formatCoordinate = (Coord : readonly [number, number, string]) => {
  const [latitude, longitude, locationName] = Coord;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};
 
const concatenateArrays = <T>(...arrays: T[][]) => 
  {
    const result: T[] = [];
    for (let arr of arrays) 
      {
        for (let item of arr) 
          {
            result.push(item);
          }
      }
    return result;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
 
const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  const popularCourses: Course[] = [];
  for (let course of courses) {
    if (course.isPublished && course.students >= minStudents) {
      popularCourses.push(course);
    }
  }
  return popularCourses;
};