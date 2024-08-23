const App = () => {
  const courseName = 'Half Stack application development';
  const courseParts = [
    {
      name: 'Fundamentals',
      exerciseCount: 10,
    },
    {
      name: 'Using props to pass data',
      exerciseCount: 7,
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14,
    },
  ];

  const totalExercises = courseParts.reduce(
    (sum, part) => sum + part.exerciseCount,
    0
  );

  interface HeaderProps {
    courseName: string;
  }

  interface CoursePart {
    name: string;
    exerciseCount: number;
  }

  interface ContentProps {
    parts: CoursePart[];
  }

  interface TotalProps {
    totalExercises: number;
  }

  const Header = (props: HeaderProps) => {
    return <h1>{props.courseName}</h1>;
  };

  const Content = (props: ContentProps) => {
    return props.parts.map((part) => (
      <p key={part.name}>
        {part.name} {part.exerciseCount}
      </p>
    ));
  };

  const Total = (props: TotalProps) => {
    return <p>Number of exercises {props.totalExercises}</p>;
  };

  return (
    <div>
      <Header courseName={courseName} />
      <Content parts={courseParts} />
      <Total totalExercises={totalExercises} />
    </div>
  );
};

export default App;
