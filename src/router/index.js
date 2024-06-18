import { createRouter, createWebHistory } from "vue-router";
import MyProfile from "@/views/MyProfile.vue";
import MyStart from "@/views/MyStart.vue";
import HomePage from "@/views/HomePage.vue";
import AdminPage from "@/views/AdmainPage.vue";
import DeleteUser from "@/views/DeleteUser.vue";
import ContentModeration from "@/views/ContentModeration.vue";
import LogOut from "@/views/LogOut.vue";
//Nariman_Pages
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Review from "@/views/ReviewPage.vue";
import HelpPage from "@/views/HelpPage.vue";
import EditPage from "@/views/EditPage.vue";
import DeleteUserPage from "@/views/DeleteUserPage.vue";
import ContentModerationPage from "@/views/ContentModerationPage.vue";
import ForgetPass from "@/views/ForgetPass.vue";
import HistoryPage from "@/views/HistoryPage.vue";
import TestPage from "@/views/TestPage.vue";
//ibrahim_Pages
import VidoeToTextWithFace from "@/views/VideoToTextWithFace.vue";
import VidoeToText from "@/views/VideoToText.vue";
import SummarizationText from "@/views/SummarizationText.vue";
import TranslationText from "@/views/TranslationText.vue";
import AudioOutput from "@/views/AudioOutput.vue";
import TranslationTextWthFace from "@/views/TranslationTextWithFace.vue";
import SummarizationTextWithFace from "@/views/SummarizationTextWithFace.vue";
import AudioOutputWithFace from "@/views/AudioOutputWithFace.vue";
import ContactUs from "@/views/ContactUs.vue";
import FeaturesHomePage from "@/views/HomePage.vue";
import ChatApp from "@/views/ChatApp.vue";
const routes = [
  {
    name: "testt",
    path: "/testt",
    component: TestPage,
  },
  {
    name: "my_main",
    path: "/profile",
    component: MyProfile,
  },
  {
    name: "my_start",
    path: "/",
    component: MyStart,
  },
  {
    name: "home_page",
    path: "/home",
    component: HomePage,
  },
  {
    name: "admin_page",
    path: "/admin",
    component: AdminPage,
  },
  {
    name: "Delete_User",
    path: "/deleteUser",
    component: DeleteUser,
  },
  {
    name: "Content_Moderation",
    path: "/Content",
    component: ContentModeration,
  },
  {
    name: "Log_Out",
    path: "/logout",
    component: LogOut,
  },
  {
    name: "sign_in",
    path: "/signin",
    component: SignIn,
  },
  {
    name: "sign_up",
    path: "/signup",
    component: SignUp,
  },
  {
    name: "review",
    path: "/review",
    component: Review,
  },
  {
    name: "help",
    path: "/help",
    component: HelpPage,
  },
  {
    name: "history",
    path: "/history",
    component: HistoryPage,
  },
  {
    name: "edit",
    path: "/edit",
    component: EditPage,
  },
  {
    name: "delete-page",
    path: "/deletepage",
    component: DeleteUserPage,
  },
  {
    name: "forget-passwprd",
    path: "/forgetpassword",
    component: ForgetPass,
  },
  {
    name: "content",
    path: "/contentmoderationpage",
    component: ContentModerationPage,
  },
  {
    name: "vidio-to-text-with-face",
    path: "/video-with-face",
    component: VidoeToTextWithFace,
  },
  {
    name: "vidio-to-text",
    path: "/video-to-text",
    component: VidoeToText,
  },
  {
    name: "summarization-text",
    path: "/summarization",
    component: SummarizationText,
  },
  {
    name: "translation",
    path: "/translation",
    component: TranslationText,
  },
  {
    name: "audio-output",
    path: "/audio",
    component: AudioOutput,
  },
  {
    name: "translation-text-with-face",
    path: "/translation-w-face",
    component: TranslationTextWthFace,
  },
  {
    name: "summarization-text-withFace",
    path: "/summarization-w-face",
    component: SummarizationTextWithFace,
  },
  {
    name: "audio-output-with-face",
    path: "/audio-output-with-face",
    component: AudioOutputWithFace,
  },

  {
    name: "contact-us",
    path: "/contact-us",
    component: ContactUs,
  },
  {
    name: "contact-us",
    path: "/contact-us",
    component: ContactUs,
  },
  {
    name: "home-page",
    path: "/features-home-page",
    component: FeaturesHomePage,
  },
  {
    name: "chat-app",
    path: "/chat-app",
    component: ChatApp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
