const activities = [
    {
      name: "Olivia Martin",
      activity: "Completed \"Introduction to Machine Learning\"",
      time: "+1h",
      avatar: "/avatars/01.png",
      initials: "OM"
    },
    {
      name: "Jackson Lee",
      activity: "Started \"Advanced React Patterns\"",
      time: "+3h",
      avatar: "/avatars/02.png",
      initials: "JL"
    },
    {
      name: "Isabella Nguyen",
      activity: "Completed Job Simulation: \"Full-Stack Developer\"",
      time: "+1d",
      avatar: "/avatars/03.png",
      initials: "IN"
    },
    {
      name: "William Kim",
      activity: "Enrolled in \"Data Structures and Algorithms\"",
      time: "+3d",
      avatar: "/avatars/04.png",
      initials: "WK"
    },
    {
      name: "Sofia Davis",
      activity: "Completed Quiz: \"JavaScript Fundamentals\"",
      time: "+1w",
      avatar: "/avatars/05.png",
      initials: "SD"
    }
  ];
  
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  
  export function RecentActivity() {
    return (
      <div className="space-y-8">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center flex-wrap gap-2">
            <Avatar className="h-9 w-9 flex-shrink-0">
              <AvatarImage src={activity.avatar} alt="Avatar" />
              <AvatarFallback>{activity.initials}</AvatarFallback>
            </Avatar>
            <div className="space-y-1 flex-grow min-w-[200px]">
              <p className="text-sm font-medium leading-none">{activity.name}</p>
              <p className="text-xs text-muted-foreground">
                {activity.activity}
              </p>
            </div>
            <div className="font-medium text-sm ml-auto">{activity.time}</div>
          </div>
        ))}
      </div>
    )
  }
  
  