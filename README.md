# Calendar Module

The module should be prepared using ReactJS use TypeScript or JavaScript.

The sample data API link is (should use a POST request):
https://prod-179.westeurope.logic.azure.com:443/workflows/7c84997dd6894507a60796acb06e5c43/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=6hFoizfo2w62d0iQK_Zyt7a3Ycr9akAkXdCPAG0ecwQ&usr=416e746f6e697347

Date and time should be displayed as “friendly” (i.e. “in 3 days” or “in 10 hours”) if the
event is less than a week, otherwise to show full date as (12/10/2023).

When you click on event in the list should open a modal component with all the details of the event.

If the event description in modal component is longer than the available space, there should be scrollbars
only for the description box.

In modal component when you click "Add to Calendar" should downloads an .ICS file of the
event to save on a calendar.

-- Here is a module example:
https://xd.adobe.com/view/6a89a6e8-9438-4480-b7c2-7aec6223793c-3fda/?fullscreen

## Development

node: v19.8.1
npm: v9.5.1

To run this project in your local machine:

git clone https://github.com/agorakis/Calendar-Module-App-React.git
npm install
npm run dev
