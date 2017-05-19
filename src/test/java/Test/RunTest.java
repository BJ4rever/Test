package Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Unit test for simple App.
 */

@RunWith(Cucumber.class)
@CucumberOptions(features = ".",
        format = {"html:target/CucumberReport","json:CucumberReport/cucumber.json"},
        tags = "@search",
        glue = "Test")

public class RunTest {

}
