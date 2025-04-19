
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Clock, Calendar, Plus, Pencil, BookOpen, Video, CheckCircle, AlertCircle } from "lucide-react";

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const StudyPlan = () => {
  const [currentDay, setCurrentDay] = useState(() => {
    const today = new Date().getDay();
    return today === 0 ? 6 : today - 1; // Convert to 0-6 range where 0 is Monday
  });
  const { toast } = useToast();

  // Placeholder data for study plan
  const studyPlan = {
    Monday: [
      { id: "m1", time: "7:00 AM - 8:00 AM", title: "CSS Basics", type: "course", icon: Video, completed: false },
      { id: "m2", time: "7:00 PM - 7:30 PM", title: "Practice HTML", type: "practice", icon: BookOpen, completed: false },
    ],
    Tuesday: [
      { id: "t1", time: "7:00 AM - 8:00 AM", title: "CSS Layouts", type: "course", icon: Video, completed: false },
    ],
    Wednesday: [
      { id: "w1", time: "7:00 PM - 8:00 PM", title: "CSS Flexbox", type: "course", icon: Video, completed: false },
    ],
    Thursday: [
      { id: "th1", time: "7:00 AM - 8:00 AM", title: "CSS Grid", type: "course", icon: Video, completed: false },
    ],
    Friday: [
      { id: "f1", time: "7:00 PM - 8:00 PM", title: "Portfolio Project", type: "project", icon: BookOpen, completed: false },
    ],
    Saturday: [
      { id: "s1", time: "10:00 AM - 11:30 AM", title: "CSS Animations", type: "course", icon: Video, completed: false },
      { id: "s2", time: "3:00 PM - 4:00 PM", title: "Code Review", type: "practice", icon: BookOpen, completed: false },
    ],
    Sunday: [
      { id: "su1", time: "11:00 AM - 12:00 PM", title: "Weekly Review", type: "practice", icon: BookOpen, completed: false },
    ],
  };

  const handleMarkComplete = (dayIndex: number, taskId: string) => {
    // In a real app, you would update your state/database
    toast({
      title: "Task marked as complete",
      description: "Your progress has been updated.",
    });
  };

  const handleRegenerate = () => {
    toast({
      title: "Study plan regenerated",
      description: "Your new study plan has been created based on your availability.",
    });
  };

  return (
    <Layout>
      <div className="flex flex-col gap-8 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Your Study Plan</h1>
            <p className="text-muted-foreground">
              Custom schedule based on your availability and learning pace
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleRegenerate}>
              <Plus className="mr-2 h-4 w-4" /> Regenerate Plan
            </Button>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" /> Set Availability
            </Button>
            <Button>
              <Pencil className="mr-2 h-4 w-4" /> Customize
            </Button>
          </div>
        </div>

        <Tabs 
          defaultValue={weekdays[currentDay]} 
          className="w-full"
          onValueChange={(value) => setCurrentDay(weekdays.indexOf(value))}
        >
          <TabsList className="grid grid-cols-7 mb-8">
            {weekdays.map((day, index) => (
              <TabsTrigger key={day} value={day} className="text-xs md:text-sm">
                {day.substring(0, 3)}
                {index === currentDay && (
                  <span className="absolute top-0 right-0 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {weekdays.map((day) => (
            <TabsContent key={day} value={day} className="mt-0">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold flex items-center">
                  <Calendar className="mr-2 h-5 w-5" /> {day}'s Plan
                </h2>
                
                {studyPlan[day as keyof typeof studyPlan].length > 0 ? (
                  <div className="space-y-4">
                    {studyPlan[day as keyof typeof studyPlan].map((task) => (
                      <Card key={task.id} className="hover-scale">
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                task.type === 'course' ? 'bg-purple-100 text-purple-700' : 
                                task.type === 'project' ? 'bg-amber-100 text-amber-700' : 
                                'bg-blue-100 text-blue-700'
                              }`}>
                                <task.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <CardTitle className="text-lg">{task.title}</CardTitle>
                                <CardDescription>{task.time}</CardDescription>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {task.completed ? (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              ) : (
                                <Button 
                                  size="sm" 
                                  variant="ghost"
                                  onClick={() => handleMarkComplete(weekdays.indexOf(day), task.id)}
                                >
                                  Mark Complete
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardHeader className="pb-2 text-center">
                      <div className="p-6">
                        <AlertCircle className="h-10 w-10 text-muted-foreground/60 mx-auto mb-4" />
                        <CardTitle className="text-lg">No study sessions planned</CardTitle>
                        <CardDescription>
                          You have a free day! Use this time to rest or catch up on previous material.
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-6 flex justify-center">
                      <Button variant="outline">
                        <Plus className="mr-2 h-4 w-4" /> Add Session
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="bg-secondary/50 rounded-lg p-6 mt-4">
          <h3 className="text-lg font-semibold mb-2">Weekly Focus</h3>
          <p className="text-muted-foreground">
            This week's focus is on <strong>CSS fundamentals</strong>. The goal is to complete all CSS basic modules
            and start working on your portfolio project.
          </p>
          <div className="mt-4 flex items-center">
            <Clock className="h-5 w-5 text-muted-foreground mr-2" />
            <span className="text-sm text-muted-foreground">Total study time this week: <strong>8 hours</strong></span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudyPlan;
