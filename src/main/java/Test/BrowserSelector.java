package Test;


import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

/**
 * Created by Gamita on 04/05/2017.
 */
public class BrowserSelector extends BasePage {

    LoadProp loadProp = new LoadProp();
    String browser = loadProp.getProperty("browser");

    public void selectBrowser(){
        if (browser.equalsIgnoreCase("firefox")) {
            driver = new FirefoxDriver();

        }else if(browser.equalsIgnoreCase("chrome")){
            System.setProperty("webdriver.chrome.driver","C:\\Users\\Gamita\\IdeaProjects\\Test\\src\\test\\Resources\\BrowserDriver\\chromedriver.exe");
            DesiredCapabilities chromeCapabilities = DesiredCapabilities.chrome();
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--disable-extensions", "--disable-infobars", "--disable-save-password-bubble","--disable-notification");
            chromeCapabilities.setCapability(ChromeOptions.CAPABILITY, options);
            driver = new ChromeDriver(options);

        }else if(browser.equalsIgnoreCase("ie")){
            System.setProperty("webdriver.ie.driver","C:\\Users\\Gamita\\IdeaProjects\\Test\\src\\test\\Resources\\BrowserDriver\\IEDriverServer.exe");
            driver = new InternetExplorerDriver();

        }else {
            System.out.println("Browser name is wrong");
        }
    }
}
