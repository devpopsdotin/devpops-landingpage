import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, Calendar, ExternalLink } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  project: z.string().min(10, "Please provide at least 10 characters describing your project")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      project: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-primary to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 700 }}>
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            Ready to get your business online? Choose the option that works best for you.
          </p>
          
          {/* Two Clear Options */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Quick & Easy</h3>
              <p className="text-blue-100 text-sm mb-4">Schedule a free 15-minute chat to discuss your project</p>
              <div className="space-y-3">
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                  onClick={() => document.getElementById('calendar-embed')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Available Times
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10 text-sm"
                  onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open Google Calendar
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Detailed Brief</h3>
              <p className="text-blue-100 text-sm mb-4">Prefer to write? Send me your project details below</p>
              <Button 
                variant="outline"
                className="w-full border-white/30 text-white hover:bg-white/10"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Send Project Brief
              </Button>
            </div>
          </div>
        </div>
        
        {/* Calendar Booking Section */}
        <Card className="shadow-2xl mb-8" id="calendar-embed">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h3>
              <p className="text-gray-600 mb-6">Select a time that works best for you. All meetings are 15 minutes and completely free.</p>
            </div>
            
            {/* Google Calendar Embed */}
            <div className="bg-gray-50 rounded-lg p-6 min-h-[500px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto" />
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-gray-700">Set Up Your Google Calendar</h4>
                  <p className="text-sm text-gray-600 max-w-md">
                    To enable booking, you'll need to create a Google Calendar appointment schedule and replace this placeholder.
                  </p>
                  <div className="pt-4 space-y-2">
                    <Button 
                      variant="outline"
                      onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules', '_blank')}
                      className="mr-2"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Create Appointment Schedule
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Setup Instructions */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Quick Setup Guide:</h4>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>Click "Create Appointment Schedule" above</li>
                <li>Set your availability (e.g., Mon-Fri, 9 AM - 5 PM)</li>
                <li>Choose 15-minute appointment slots</li>
                <li>Add booking form questions if needed</li>
                <li>Copy the booking page URL and replace the placeholder</li>
              </ol>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-2xl" id="contact-form">
          <CardContent className="p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                <p className="text-gray-600 mb-6">Your message has been sent successfully. I'll get back to you within 24 hours.</p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name"
                            className="focus:ring-2 focus:ring-accent focus:border-accent"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your@email.com"
                            className="focus:ring-2 focus:ring-accent focus:border-accent"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="project"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Tell me about your project</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your business and what you're looking for in a website..."
                            rows={4}
                            className="focus:ring-2 focus:ring-accent focus:border-accent"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-primary text-white font-semibold py-4 px-8"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send My Request"}
                  </Button>
                </form>
              </Form>
            )}

          </CardContent>
        </Card>
      </div>
    </section>
  );
}
