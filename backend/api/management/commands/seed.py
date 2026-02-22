from django.core.management.base import BaseCommand
from api.models import Section

class Command(BaseCommand):
    help = 'Seeds the database with RDR2 content'

    def handle(self, *args, **options):
        Section.objects.all().delete()

        sections = [
            {
                "title": "Introduction",
                "content": "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption. The story is set in a fictionalized representation of the United States in 1899 and follows the exploits of Arthur Morgan, an outlaw and member of the Van der Linde gang, who must face the challenges of a declining Wild West, while attempting to survive against government forces, rival gangs, and other adversaries.",
                "order": 1
            },
            {
                "title": "Gameplay",
                "content": "Red Dead Redemption 2 is a Western-themed action-adventure game. Played from a first- or third-person perspective, the game is set in an open-world environment featuring a fictionalized version of the United States in 1899. It features single-player and online multiplayer components, the latter released under Red Dead Online. For most of the game, the player controls outlaw Arthur Morgan, a member of the Van der Linde gang, as he completes missions—linear scenarios with set objectives—to progress the story.",
                "order": 2
            },
            {
                "title": "Synopsis",
                "content": "The world of Red Dead Redemption 2 spans five fictitious U.S. states: New Hanover, Ambarino, and Lemoyne are located to the immediate north and east of New Austin and West Elizabeth, which return from Red Dead Redemption. Ambarino is a sparsely populated mountain wilderness, with the only settlement being the Wapiti Indian Reservation.",
                "order": 3
            },
            {
                "title": "Development",
                "content": "Preliminary work on Red Dead Redemption 2 began shortly following the release of the original game, Red Dead Redemption (2010). Rockstar San Diego, the studio behind the original game, had a rough outline of the game by mid-2011, and by late 2012, rough scripts of the game had been completed. When Rockstar Games realized a group of distinct studios would not necessarily work, it co-opted all of its studios into one large team, presented simply as Rockstar Games, to facilitate development between 1,600 people.",
                "order": 4
            },
             {
                "title": "Reception",
                "content": "Red Dead Redemption 2 was released for the PlayStation 4 and Xbox One in October 2018, and for Windows and Stadia in November 2019. It broke several records and had the second-biggest launch in the history of entertainment, generating US$725 million in sales from its opening weekend and exceeding the lifetime sales of Red Dead Redemption in two weeks.",
                "order": 5
            }
        ]

        for section_data in sections:
            Section.objects.create(**section_data)

        self.stdout.write(self.style.SUCCESS('Successfully seeded database'))
