const App = () => {
  const courseName = 'Half Stack application development';

  interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }

  interface CoursePartDescription extends CoursePartBase {
    description: string;
  }

  interface CoursePartBasic extends CoursePartDescription {
    kind: 'basic';
  }

  interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: 'group';
  }

  interface CoursePartBackground extends CoursePartDescription {
    backgroundMaterial: string;
    kind: 'background';
  }

  type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground;

  const courseParts: CoursePart[] = [
    {
      name: 'Fundamentals',
      exerciseCount: 10,
      description: 'This is an awesome course part',
      kind: 'basic',
    },
    {
      name: 'Using props to pass data',
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: 'group',
    },
    {
      name: 'Basics of type Narrowing',
      exerciseCount: 7,
      description: 'How to go from unknown to string',
      kind: 'basic',
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14,
      description: 'Confusing description',
      backgroundMaterial:
        'https://type-level-typescript.com/template-literal-types',
      kind: 'background',
    },
    {
      name: 'TypeScript in frontend',
      exerciseCount: 10,
      description: 'a hard part',
      kind: 'basic',
    },
  ];

  const totalExercises = courseParts.reduce(
    (sum, part) => sum + part.exerciseCount,
    0
  );

  interface HeaderProps {
    courseName: string;
  }

  interface PartProps {
    part: CoursePart;
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

  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  const Part = (props: PartProps) => {
    switch (props.part.kind) {
      case 'basic':
        return (
          <p>
            <b>
              {props.part.name} {props.part.exerciseCount}
            </b>
            <br />
            <em>{props.part.description}</em>
          </p>
        );
      case 'group':
        return (
          <p>
            <b>
              {props.part.name} {props.part.exerciseCount}
            </b>
            <br />
            project exercises {props.part.groupProjectCount}
          </p>
        );
      case 'background':
        return (
          <p>
            <b>
              {props.part.name} {props.part.exerciseCount}
            </b>
            <br />
            background reading: {props.part.backgroundMaterial}
          </p>
        );
      default:
        return assertNever(props.part);
    }
  };

  const Content = (props: ContentProps) => {
    return props.parts.map((part) => <Part key={part.name} part={part} />);
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
