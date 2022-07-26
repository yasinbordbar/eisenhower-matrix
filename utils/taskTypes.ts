export const taskTypes = {
  urgentImportant: {
    url: "urgent-important",
    title: "Urgent - Important",
    counter: 2,
    counterColor: "green",
    description:
      "Urgent and Important tasks demand you take action quickly. These items typically have visible deadlines and consequences for stalling on taking action. Most often, these are either things that were sprung on you from an external source or things that you put off until faced with a looming deadline. Either way, they require a crisis mode response.",
  },
  notUrgentImportant: {
    url: "not-urgent-important",
    title: "Not Urgent - Important",
    counter: 4,
    counterColor: "blue",
    description:
      "Not urgent, but important tasks are the activities that help you achieve long-term goals. These may not have a deadline (or even an end date) so it is easy to put them off in favor of more urgent tasks. However, these tasks have a much greater effect on your long-term effectiveness in completing your goals.",
  },
  urgentNotImportant: {
    url: "urgent-not-important",
    title: "Urgent - Not Important",
    counter: 3,
    counterColor: "orange",
    description:
      "Urgent but Not Important tasks are best described as busy work. These tasks are often based on expectations set by others and do not move you closer to your long-term goals.",
  },
  notUrgentNotImportant: {
    url: "not-urgent-not-important",
    title: "Not Urgent - Not Important",
    counter: 5,
    counterColor: "red",
    description:
      "Not urgent and not important tasks are time-wasting activities that should be ruthlessly cut out. These activities don’t contribute to progress on your goals but can end up taking over large chunks of time.",
  },
};
