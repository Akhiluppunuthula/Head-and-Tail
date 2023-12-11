const About = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-extrabold my-4">About</h1>
      <p className="font-medium text-xl my-2 p-2">
        1. First of all you need to add is two values in dropdown ‘ H ‘ & ‘ T ‘ and
        by default.
      </p>
      <p className="font-medium text-xl my-2 p-2">
        2. Select any value from dropdown (H or T) and click on submit button that
        suppose you choose H value and it should be visible below submit button.
        And now if you add two more times H then that 2 H chars should be
        visible below first H.
      </p>
      <p className="font-medium text-xl my-2 p-2">
        3. Now If you select T then It should be visible beside First H, and if
        you again add T then it should be visible below first T{" "}
      </p>
      <p className="font-medium text-xl my-2 p-2">
        4. Now if you add H then it should be visible beside first T, and If you
        again add T then It should visible beside H
      </p>
      <p className="font-medium text-xl my-2 p-2">
        5. All you need to do is make separate columns for H and T, if you add same
        char then it will visible below from that added char, if you add new
        then we’ll create new column.
      </p>
    </div>
  );
};

export default About;
